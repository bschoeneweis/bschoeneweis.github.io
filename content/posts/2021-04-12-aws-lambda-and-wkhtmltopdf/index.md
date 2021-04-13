---
title: Converting HTML to a PDF using Python, wkhtmltopdf, and AWS Lambda
author: Bradley Schoeneweis
date: 2021-04-12
hero: ./images/hero.jpg
excerpt: Setting up usage of wkhtmltopdf with Python in an AWS Lambda function for easy HTML to PDF conversion.
---

## tl;dr

### Goal
_Setting up an easy to call HTML to PDF converter as an AWS Lambda function_

### Process Overview
1. **Downloading the `wkhtmltopdf` binary**
2. **Creating the AWS Lambda layer**
3. **Writing the AWS Lambda function**
4. **Calling our function**

### Prerequisites
This article assumes access to an AWS account (free-tier is acceptable) and basic knowledge on AWS Lambda/s3. Knowledge of Python will also be assumed.

### Notes
This article will use `us-east-2` for the AWS region, changing this shouldn't effect functionality, just the links within the article.

---
A common task I've found myself undertaking recently is programatically converting an HTML file/string to an embedded and stylized PDF file.

An example use case for this might be exporting a self-managed customer invoice or generating a daily report from an existing HTML template. For those who have used template languages before, you can probably imagine the usefulness of a function like this in combination with [Jinja](https://jinja.palletsprojects.com/en/2.11.x/) or template rendering engines commonly found in Web Frameworks (like [Django](https://www.djangoproject.com/)).

I figured this would be a fairly straightforward task (and to some extent, is was). However, the part that I found was the most tedious was the initial setup.

After doing some research on third party libraries that could simplify our goal, I decided to use [`wkhtmltopdf`](https://wkhtmltopdf.org/).

`wkhtmltopdf` is an open-source command line tool that enables you to easy convert an HTML file to a PDF file. This is exactly what we're looking for.

So let's dive into it.

---

## Why AWS Lambda?
[AWS Lambda](https://aws.amazon.com/lambda/) provides serverless computing functions where you don't need to manage any server or containers, you can simply call your function synchronously or asynchronously, and it will be executed and scaled automatically.

Lambda has a ton of use cases and is something I have personally used many times and am a big advocate for.

_For our goal, AWS Lambda is a powerful tool for the following reasons_
- It allows us to offload processing away from the server
	- This is more of a general benefit, we won't actually be calling this function from a running server
	- These calls will also be scaled automatically
- Our dependencies, specifically the `wkhtmltopdf` binary, can be handled well through [AWS Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)
	- This helps to avoid dealing with different Linux distributions or multiple installation locations

**Below is an explanation of why handling the dependencies through layers will avoid issues. For continued instruction, you can skip to the next section.**

### Issues with downloading the binary
When I was first using this library, I was also using [`pdfkit`](https://pypi.org/project/pdfkit/) to drive this interaction.  At the top of the [installation instructions, you can see the following warning:

<p style="background-color: orange; padding: 7px; text-align: center;">
<i>"<b>Warning!</b> Version in debian/ubuntu repos have reduced functionality (because it compiled without the wkhtmltopdf QT patches), such as adding outlines, headers, footers, TOC etc. To use this options you should install static binary from wkhtmltopdf site"</i>
</p>

When I first installed `wkhtmltopdf`, I didn't heed the warning and just ran the following:
```bash
sudo apt-get install wkhtmltopdf
```

On initial inspection, I wasn't experiencing the problems they mentioned (_at least in my local environment_). The issues came when I actually pushed up code using this library to a staging environment and I noticed the PDFs were no longer generating.

I was able to remedy this by installing in an alternative way:
```bash
sudo apt-get remove --purge wkhtmltopdf
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.bionic_amd64.deb
sudo dpkg -i wkhtmltox_0.12.6-1.bionic_amd64.deb
rm wkhtmltox_0.12.6-1.bionic_amd64.deb
```

This isn't a big deal, but managing this dependency could get tedious if your architecture has multiple servers that need installed with different Linux distributions.

Putting this binary into an AWS Lambda Layer can help solve this by having a single point of installation and management.

## Downloading the `wkhtmltopdf` binary
The `wkhtmltopdf` site actually lists using this library with AWS Lambda as a [FAQ](https://wkhtmltopdf.org/downloads.html#how-do-i-use-it-in-aws-lambda) and gives the following response to this question:

_"All files required for lambda layer are packed in one zip archive (Amazon Linux 2 / lambda zip)"_

You can download the binary on the releases page under the [Stable releases](https://wkhtmltopdf.org/downloads.html#stable). You'll see an entry under `Amazon Linux` with `lambda zip` as the architecture.

Or, you can click [here](https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-4/wkhtmltox-0.12.6-4.amazonlinux2_lambda.zip) (I likely won't update this link, so probably best to go directly to the release page).

_Random note:_ If you need more fonts for future usage, I've found that [this is a good resource](https://github.com/brandonlim-hs/fonts-aws-lambda-layer).

## Creating the AWS Lambda layers

[AWS Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) allow us to add in "layers" of dependencies for our functions. An alternative to this uploading your lambda function as a deployment package, but that is out of the scope of this post.

### `wkhtmltopdf`
Now that we have the zip file downloaded, let's add our file as a layer in the [AWS Management Console](https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2).

Go to the [Layers section](https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/layers) on the AWS Lambda page and click `Create layer`.

Then, add the following Layer configuration

<div className="Image__Small">
  <img src="./images/layer-configuration.jpg" alt="AWS Lambda layer configuration" />
</div>

Notice that we don't add a runtime here, this is intentional since our layer is a binary.

Now we're set up to start writing our function code!





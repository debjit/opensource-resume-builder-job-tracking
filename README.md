# "Opensource Multi-Resume"
> Build with appwrite opensource banckend
## This is an Opensource Multi Resume, Cover file Builder and Job Tracking system.

This application simplify your job search and help you get more interview by using AI and mordern techniques to help get over 75% over score on ATC. This harness mordern opensource tools and make it very simple for everyone to use freely.

> Security Risk: All your appwrite database and other creds are exposed. Please do not use this repo in your production env. I am using this only for demo and will be deleted once done. eta 1st jul 2023. Later I will update with more secure version of it.
> Login Disabled due to some backend problem, you can check the demo. Creating new resume is also disabled.

To run locally you need to add these env.
For showwcase job search and user information go to showwcase.com and get your api key from there. Get your api key and add to .env or .env.local file
```
SHOWWCASE_KEY=""
```
You need appwrite cloud account for this to work, it is free.

```
NEXT_PUBLIC_AW_END_POINT=""
NEXT_PUBLIC_AW_PROJECT_ID=""
#  Database ID
NEXT_PUBLIC_AW_DATABASE_ID=""
# Tables
NEXT_PUBLIC_AW_TABLE_BLOCK_ID=""
NEXT_PUBLIC_AW_TABLE_RESUME_ID=""
NEXT_PUBLIC_AW_TABLE_JOBS_ID=""
NEXT_PUBLIC_AW_TABLE_SKILLS_ID=""
NEXT_PUBLIC_AW_TABLE_INFO_ID=""
NEXT_PUBLIC_AW_TABLE_TODO_ID=""
```
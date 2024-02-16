import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import {generateRandomString,getAllFilesInFolder} from "./utils"
import path from "path";

const app= express()
app.use(cors())
app.use(express.json())
app.listen(3000)

app.post("/deploy",async (req,resp) => {
    const repoUrl = req.body.repoUrl
    console.log(repoUrl)
    let randomString = generateRandomString();
    let gitlocalPath = path.join(__dirname,`output/${randomString}`)
    await simpleGit().clone(repoUrl,gitlocalPath)
    let files = getAllFilesInFolder(gitlocalPath)
    resp.json({'jobnumber':randomString,
'files':files})
})
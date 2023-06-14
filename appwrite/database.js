import { Client, Account, Databases, Query, ID } from "appwrite";

// Database ID
const awDatabaseMultiResume = process.env.NEXT_PUBLIC_AW_DATABASE_ID;
// Tables
const awTableBlocks = process.env.NEXT_PUBLIC_AW_TABLE_BLOCK_ID;
export const awTableResumes = process.env.NEXT_PUBLIC_AW_TABLE_RESUME_ID;
export const awTableJobs =process.env.NEXT_PUBLIC_AW_TABLE_JOBS_ID;
export const awTableSkills = process.env.NEXT_PUBLIC_AW_TABLE_SKILLS_ID;
export const awTableInfo = process.env.NEXT_PUBLIC_AW_TABLE_INFO_ID;
export const awTableTodos = process.env.NEXT_PUBLIC_AW_TABLE_TODO_ID;

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_AW_END_POINT)
  .setProject(process.env.NEXT_PUBLIC_AW_PROJECT_ID);

// Database
const databases = new Databases(client, awDatabaseMultiResume);

export const getBlock = (block) => {
  return databases.listDocuments(awDatabaseMultiResume, awTableBlocks, [
    Query.equal("type", block),
  ]);
};

export const getBlocks = () => {
  return databases.listDocuments(awDatabaseMultiResume, awTableBlocks);
};
export const createBlock = (block) => {
  return databases.createDocument(
    awDatabaseMultiResume,
    awTableBlocks,
    ID.unique(),
    block
  );
};
export const getTodos = () => {
  return databases.listDocuments(awDatabaseMultiResume, awTableTodos);
};
export const getAllResume = () => {
  return databases.listDocuments(awDatabaseMultiResume, awTableResumes);
};
export const createResume = (resume) => {
  return databases.createDocument(
    awDatabaseMultiResume,
    awTableResumes,
    ID.unique(),
    resume
  );
};

export const updateResumeToServer = (resume, data) => {
  return databases.updateDocument(
    awDatabaseMultiResume,
    awTableResumes,
    resume,
    data
  );
};

export const getSingleResume = (uid) => {
  return databases.listDocuments(awDatabaseMultiResume, awTableResumes, [
    Query.equal("$id", uid),
  ]);
};

export const getUserInfo = () => {
  return databases.listDocuments(awDatabaseMultiResume, awTableInfo);
};

export const getSingleUser = (uid) => {
  return databases.listDocuments(awDatabaseMultiResume, awTableInfo, [
    Query.equal("$id", uid),
  ]);
};

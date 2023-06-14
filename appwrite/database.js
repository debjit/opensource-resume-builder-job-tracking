import { Client, Account, Databases, Query, ID } from "appwrite";
import {
  awEndpoint,
  awProjectID,
  awDatabaseMultiResume,
  awTableBlocks,
  awTableResumes,
  awTableJobs,
  awTableSkills,
  awTableInfo,
  awTableTodos
} from "./appwriteIDs";

const client = new Client()
  .setEndpoint(awEndpoint)
  .setProject(awProjectID);

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

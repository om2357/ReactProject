import conf from "../conf.js";
import { Client, ID, Databases, Storage, Query  } from "appwrite";


export class Service{
    client = new Client();
    Databases;
    bucket;

    constructor()
    {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new this.Storage(this.client);

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId, 
                }
            )
        }catch(error){
            console.log("Appwrite servie :: createPost :: error", error);
        }
    
    }

    async updatePost(slug, {title,  content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }catch(error)
        {
            console.log("Appwrite service :: updatePoat :: error", error);
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        }catch(error){
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }

    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId, 
                slug
            )
        }catch(error)
        {
            console.log("Appwrite service :: getPost :: error", error);
            return false
            
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
        }
    }

    // file upload

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        }catch(error)
        {
            console.log("appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("appwrite service :: deleteFile :: error", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
    
}
    const service = new Service();
    export default service;

// Singleton class for Phyllo Helper

import AppConfig from "src/config/app.config";
import { fetchUtil } from "./fetch-helper";
import { FetchService } from "nestjs-fetch";


export class PhylloHelper {
    private static instance: PhylloHelper;

    private constructor() { }


    public static getInstance(): PhylloHelper {
        if (!PhylloHelper.instance) {
            PhylloHelper.instance = new PhylloHelper();
        }

        return PhylloHelper.instance;
    }

    private PhylloEndpoints = {
        GET_ALL_USERS: "/users",
        CREATE_USER: "/users",
        CREATE_SDK_TOKEN: "/sdk-tokens",
        GET_USER_ACCOUNTS: "/accounts?user_id="
    }

    public getAuthorizationToken(): string {
        return "Basic " + btoa(AppConfig.PHYLLO.CLIENT_ID + ":" + AppConfig.PHYLLO.SECRET_ID);
    }

    public getBaseURL(): string {
        return "https://api.sandbox.getphyllo.com/v1";
    }

    public getAllUsers(): any {
        return fetchUtil({
            url: this.getBaseURL() + this.PhylloEndpoints.GET_ALL_USERS,
            method: "GET",
            token: this.getAuthorizationToken()
        })
    }

    public createUser(userData: { name: string, external_id: string }): any {
        return fetchUtil({
            url: this.getBaseURL() + this.PhylloEndpoints.CREATE_USER,
            method: "POST",
            token: this.getAuthorizationToken(),
            body: JSON.stringify(userData)
        })
    }

    public createUserToken(user_id: string): any {
        return fetchUtil({
            url: this.getBaseURL() + this.PhylloEndpoints.CREATE_SDK_TOKEN,
            method: "POST",
            token: this.getAuthorizationToken(),
            body: JSON.stringify({
                user_id,
                products: [
                    "IDENTITY",
                    "IDENTITY.AUDIENCE",
                    "ENGAGEMENT",
                    "ENGAGEMENT.AUDIENCE",
                    "INCOME"
                ]
            })
        })
    }

    public getUserAccountDetails(user_id: string): any {
        return fetchUtil({
            url: this.getBaseURL() + this.PhylloEndpoints.GET_USER_ACCOUNTS + user_id,
            method: "GET",
            token: this.getAuthorizationToken()
        })
    }

}
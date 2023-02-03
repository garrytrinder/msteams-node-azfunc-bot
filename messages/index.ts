import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // this will be triggered when a new message is recieved from azure bot service
    context.suppressAsyncDoneError = true;
    context.res = {
        status: 200,
        body: "Hello"
    };
};

export default httpTrigger;

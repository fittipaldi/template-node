export class HttpResponse {

    public success(data: any): object {
        return {
            success: true,
            data: data,
            message: 'Success!'
        };
    }


    public messenger(message: any): object {
        return {
            success: false,
            message: message || 'Something went wrong!'
        };
    }

}
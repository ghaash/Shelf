class ApisController < ApplicationController
    def index
        render json: Api.all
    end
    
    def create
        api = Api.create(api_params)
        render json: api
    end

private

    def api_params
        params.require(:api).permit(:title, :summary)
    end
    
end
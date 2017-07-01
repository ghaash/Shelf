Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :books, only:[:index, :show, :create, :update, :destroy]
  resources :wishlists, only:[:index, :show, :create, :update, :destroy]
  resources :reviews, only:[:index, :show, :create, :update, :destroy]
  resources :apis, only:[:index, :show, :create, :update, :destroy]
end

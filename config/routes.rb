Rails.application.routes.draw do
  devise_for :users
  resources :posts
  
  get 'api/v1/get_weather' => 'api/v1/weather#get_weather'
  
  root to: 'home#index'
end

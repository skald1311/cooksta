from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_post),
    path('<postID>/', views.view_post),
    path('like/<postID>/', views.like_post)
]
from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register),
    path('login/', views.login),
    path('<username>/ppf', views.get_profile_pic),
    path('<username>/description', views.get_profile_desc)
]
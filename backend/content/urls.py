from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

from . import views

urlpatterns = [
    # Auth
    path('auth/', include('djoser.urls')),
    path('auth/token', obtain_auth_token, name='token'),

    # User
    path('user/<int:pk>/', views.UserRetrieveView.as_view()),
    path('user/create/', views.UserCreateView.as_view()),
    path('user/update/<int:pk>/', views.UserUpdateView.as_view()),
    path('user/delete/<int:pk>/', views.UserDeleteView.as_view()),
    path('user/logout/', views.UserLogout.as_view()),
    path('user/all/', views.UserListView.as_view()),

    # Category
    path('category/<int:pk>/', views.CategoryRetrieveView.as_view()),
    path('category/create/', views.CategoryCreateView.as_view()),
    path('category/update/<int:pk>', views.CategoryUpdateView.as_view()),
    path('category/delete/<int:pk>', views.CategoryDeleteView.as_view()),
    path('category/all/', views.CategoryListView.as_view()),
    path('category/user/all/', views.CategoryAuthUserListView.as_view()),

    # Link
    path('link/<int:pk>/', views.LinkRetrieveView.as_view()),
    path('link/create/', views.LinkCreateView.as_view()),
    path('link/update/<int:pk>', views.LinkUpdateView.as_view()),
    path('link/delete/<int:pk>', views.LinkDeleteView.as_view()),
    path('link/all/', views.LinkListView.as_view()),
    path('link/user/all/', views.LinkListUserView.as_view()),

    path('links/', views.UnauthorizedUserLinkView.as_view()),

    # Version
    path('version/last/', views.VersionView.as_view()),
]

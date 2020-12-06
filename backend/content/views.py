from django.contrib.auth.models import User
from django.db import models
from rest_framework import generics, permissions
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import Category, UnauthorizedUserLink, Version, Link
from .serializers import *


# Действия с пользователем
class UserRetrieveView(generics.RetrieveAPIView):
    """Получение одного пользователя по id"""
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserCreateView(generics.CreateAPIView):
    """Создание пользователя"""
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserUpdateView(generics.UpdateAPIView):
    """Редактирование пользователя"""
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDeleteView(generics.DestroyAPIView):
    """Удаление пользователя"""
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser,)


class UserListView(generics.ListAPIView):
    """Список всех пользователей"""
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Действия с категориями
class CategoryRetrieveView(generics.RetrieveAPIView):
    """Вывод категории по id"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    # permission_classes = (IsAuthenticated,)


class CategoryCreateView(generics.CreateAPIView):
    """Создание категории"""
    queryset = Category.objects.all()
    serializer_class = CreateCategorySerializer
    permission_classes = (IsAuthenticated,)


class CategoryUpdateView(generics.UpdateAPIView):
    """Редактирование категории"""
    queryset = Category.objects.all()
    serializer_class = CreateCategorySerializer
    permission_classes = (IsAuthenticated,)


class CategoryDeleteView(generics.DestroyAPIView):
    """Удаление категории"""
    queryset = Category.objects.all()
    serializer_class = CreateCategorySerializer
    permission_classes = (IsAuthenticated,)


class CategoryListView(generics.ListAPIView):
    """Список всех категорий"""
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CategoryUserListView(generics.ListAPIView):
    """Список всех категорий авторизованного пользователя"""
    serializer_class = CategorySerializer

    def get_queryset(self):
        """вывод только тех категорий которые принадлежат авторизованному пользователю"""
        return Category.objects.filter(owner=self.request.user)


# Действия с линками
class LinkRetrieveView(generics.RetrieveAPIView):
    """Вывод линки по id"""
    serializer_class = LinkSerializer
    queryset = Link.objects.all()


class LinkCreateView(generics.CreateAPIView):
    """Создание линки"""
    serializer_class = CreateLinkSerializer

    def get_queryset(self):
        return Category.objects.filter(category=self.request.user)

    permission_classes = (IsAuthenticated,)



class LinkUpdateView(generics.UpdateAPIView):
    """Редактирование линки"""
    serializer_class = CreateLinkSerializer
    queryset = Link.objects.all()
    permission_classes = (IsAuthenticated,)


class LinkDeleteView(generics.DestroyAPIView):
    """Удаление линки"""
    serializer_class = CreateLinkSerializer
    queryset = Link.objects.all()
    permission_classes = (IsAuthenticated,)


class LinkListView(generics.ListAPIView):
    """Вывод всех линков всех пользователей"""
    serializer_class = LinkSerializer
    queryset = Link.objects.all()
    permission_classes = (IsAdminUser,)


class LinkListUserView(generics.ListAPIView):
    """Вывод всех линков авторизованного пользователя"""
    serializer_class = LinkSerializer

    def get_queryset(self):
        return Link.objects.filter(category__owner=self.request.user)

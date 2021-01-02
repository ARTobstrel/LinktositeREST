from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import Category, UnauthorizedUserLink, Version, Link
from .permissions import IsOwner
from .serializers import CategorySerializer, CreateCategorySerializer, UserProjectSerializer, LinkSerializer, \
    CreateLinkSerializer, UnauthorizedUserLinkSerializer, VersionSerializer, CategoryAuthUserSerializer


# Действия с пользователем
class UserRetrieveView(generics.RetrieveAPIView):
    """Получение одного пользователя по id"""
    queryset = User.objects.all()
    serializer_class = UserProjectSerializer
    permission_classes = (IsAuthenticated,)


class UserCreateView(generics.CreateAPIView):
    """Создание пользователя"""
    serializer_class = UserProjectSerializer


class UserUpdateView(generics.UpdateAPIView):
    """Редактирование пользователя"""
    queryset = User.objects.all()
    serializer_class = UserProjectSerializer
    permission_classes = (IsOwner,) # переделать пермишн


class UserDeleteView(generics.DestroyAPIView):
    """Удаление пользователя"""
    queryset = User.objects.all()
    serializer_class = UserProjectSerializer
    # permission_classes = (IsAdminUser,)


class UserListView(generics.ListAPIView):
    """Список всех пользователей. Admin only"""
    queryset = User.objects.all()
    serializer_class = UserProjectSerializer
    # permission_classes = (IsAdminUser,)


# Действия с категориями
class CategoryRetrieveView(generics.RetrieveAPIView):
    """Вывод категории по id"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAuthenticated, IsOwner)


class CategoryCreateView(generics.CreateAPIView):
    """Создание категории"""
    queryset = Category.objects.all()
    serializer_class = CreateCategorySerializer
    permission_classes = (IsAuthenticated,)


class CategoryUpdateView(generics.UpdateAPIView):
    """Редактирование категории"""
    queryset = Category.objects.all()
    serializer_class = CreateCategorySerializer
    permission_classes = (IsAuthenticated, IsOwner)


class CategoryDeleteView(generics.DestroyAPIView):
    """Удаление категории"""
    queryset = Category.objects.all()
    serializer_class = CreateCategorySerializer
    permission_classes = (IsAuthenticated, IsOwner)


class CategoryListView(generics.ListAPIView):
    """Список всех категорий"""
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    # permission_classes = (IsAdminUser,)


class CategoryAuthUserListView(generics.ListAPIView):
    """Список всех категорий авторизованного пользователя с добавлением линков"""
    serializer_class = CategoryAuthUserSerializer

    def get_queryset(self):
        """вывод только тех категорий которые принадлежат авторизованному пользователю"""
        return Category.objects.filter(owner=self.request.user)

    permission_classes = (IsAuthenticated,)


# Действия с линками
class LinkRetrieveView(generics.RetrieveAPIView):
    """Вывод линки по id"""
    serializer_class = LinkSerializer
    queryset = Link.objects.all()
    permission_classes = (IsAuthenticated,)


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
    """Линки всех пользователей"""
    serializer_class = LinkSerializer
    queryset = Link.objects.all()
    permission_classes = (IsAdminUser,)


class LinkListUserView(generics.ListAPIView):
    """Линки авторизованного пользователя"""
    serializer_class = LinkSerializer

    def get_queryset(self):
        return Link.objects.filter(category__owner=self.request.user)

    permission_classes = (IsAuthenticated,)


# Линки для неавторизованного пользователя
class UnauthorizedUserLinkView(generics.ListAPIView):
    """Линки для неавторизованного пользователя"""
    serializer_class = UnauthorizedUserLinkSerializer
    queryset = UnauthorizedUserLink.objects.all()


# Не работает
class VersionView(generics.ListAPIView):
    """Версия и год обновления"""
    serializer_class = VersionSerializer

    def get_queryset(self):
        """Получение последней версии"""
        return Version.objects.filter(id=Version.objects.all().last().id)

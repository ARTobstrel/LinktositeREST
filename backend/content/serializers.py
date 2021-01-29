from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Category, Link, UnauthorizedUserLink, Version

User = get_user_model()


class UserProjectSerializer(serializers.ModelSerializer):
    """Пользователь"""
    date_joined = serializers.DateTimeField(format='%d.%m.%Y')

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'is_superuser', 'date_joined']
        # fields = '__all__'


class LinkSetSerializer(serializers.ModelSerializer):
    """сет линков принадлежащих конкретной категории"""

    class Meta:
        model = Link
        fields = ['title', 'link', 'image']


class CategorySerializer(serializers.ModelSerializer):
    """Список всех категорий"""
    owner = UserProjectSerializer()
    link_set = serializers.ManyRelatedField(child_relation=LinkSetSerializer())  # уже ближе но нето

    class Meta:
        model = Category
        fields = ['id', 'name', 'owner', 'link_set']


class CategoryAuthUserSerializer(serializers.ModelSerializer):
    """Категории авторизованного пользователя"""
    link_set = serializers.ManyRelatedField(child_relation=LinkSetSerializer())

    class Meta:
        model = Category
        fields = ['id', 'name', 'link_set']


class CreateCategorySerializer(serializers.ModelSerializer):
    """Категория для редактирования"""
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Category
        exclude = ('slug',)


class LinkSerializer(serializers.ModelSerializer):
    """Линка"""
    category = CategorySerializer()

    class Meta:
        model = Link
        fields = '__all__'


class CreateLinkSerializer(serializers.ModelSerializer):
    """Линка для редактирования"""

    class Meta:
        model = Link
        exclude = ('slug',)


class UnauthorizedUserLinkSerializer(serializers.ModelSerializer):
    """Линки для неавторизованного пользователя"""

    class Meta:
        model = UnauthorizedUserLink
        exclude = ('slug',)


class VersionSerializer(serializers.ModelSerializer):
    """Версия и год"""

    class Meta:
        model = Version
        fields = '__all__'

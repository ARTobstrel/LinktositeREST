from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Category, Link


class UserSerializer(serializers.ModelSerializer):
    """Список пользователей"""

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


class CategorySerializer(serializers.ModelSerializer):
    """Список всех категорий"""
    owner = UserSerializer()

    class Meta:
        model = Category
        fields = '__all__'


class CreateCategorySerializer(serializers.ModelSerializer):
    """Категория для редактирования"""

    class Meta:
        model = Category
        fields = '__all__'


class LinkSerializer(serializers.ModelSerializer):
    """Линка"""
    category = CategorySerializer()

    class Meta:
        model = Link
        exclude = ('slug',)


class CreateLinkSerializer(serializers.ModelSerializer):
    """Линка для редактирования"""

    class Meta:
        model = Link
        exclude = ('slug',)

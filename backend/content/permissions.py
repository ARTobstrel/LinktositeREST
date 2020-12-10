from rest_framework.permissions import BasePermission


class IsOwner(BasePermission):
    """Является ли авторизованный пользователь собственником объекта"""
    def has_object_permission(self, request, view, obj):
        return obj.owner == request.user
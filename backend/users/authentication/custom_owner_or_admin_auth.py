from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminOrReadOnly(BasePermission):
    def has_object_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        return request.user.is_staff


class IsOwnerOrAdminOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        if request.user.is_staff or obj == request.user:
            return True

        return False

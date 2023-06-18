from .serializers import TopicSerializer
from .models import Topic

from rest_framework import generics
from rest_framework.permissions import AllowAny

from users.authentication.custom_jwt_auth import CustomJWTAuthentication
from users.authentication.custom_owner_or_admin_auth import (
    IsOwnerOrAdminOrReadOnly,
)


class ListCreateTopicView(generics.ListCreateAPIView):
    serializer_class = TopicSerializer
    queryset = Topic.objects.all()
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [AllowAny]

    def get_authenticators(self):
        if self.request.method == "POST":
            return [CustomJWTAuthentication()]

        return super().get_authenticators()

    def perform_create(self, serializer):
        serializer.save(
            author=self.request.user,
            category_id=self.request.data.get("category"),
        )


class DetailTopicView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TopicSerializer
    queryset = Topic.objects.all()

    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsOwnerOrAdminOrReadOnly]

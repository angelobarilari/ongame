from .serializers import UserSerializer, AdminSerializer, LoginSerializer
from .models import User

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework.authtoken.views import ObtainAuthToken

from .authentication.authenticate_user import authenticate_user
from .authentication.custom_jwt_auth import CustomJWTAuthentication
from .authentication.custom_owner_or_admin_auth import IsOwnerOrAdminOrReadOnly


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class CreateAdminView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = AdminSerializer
    permission_classes = [IsAdminUser]

    def perform_create(self, serializer):
        serializer.save(is_staff=True)


class ListUsersView(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class DetailUserlView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsOwnerOrAdminOrReadOnly]


class CustomObtainAuthToken(ObtainAuthToken):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)

        serializer.is_valid(raise_exception=True)

        token = authenticate_user(
            serializer.validated_data["username"],
            serializer.validated_data["password"],
        )

        if token:
            return Response({"token": token})
        return Response(
            {"Error": "Unable to log in with provided credentials."},
            status=400,
        )

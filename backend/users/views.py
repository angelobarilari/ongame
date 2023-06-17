from users.serializers import UserSerializer, LoginSerializer
from users.models import User

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from .utils.auth_utils import authenticate_user

# Create your views here.


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class ListUsersView(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class DetailUserlView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class CustomObtainAuthToken(ObtainAuthToken):
    serializer_class = LoginSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)

        serializer.is_valid(raise_exception=True)

        token = authenticate_user(
            serializer.validated_data['username'], 
            serializer.validated_data['password']
        )
        
        if token:
            return Response({'token': token})
        return Response({'error': 'Unable to log in with provided credentials.'}, status=400)

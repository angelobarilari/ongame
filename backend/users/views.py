from users.serializers import UserSerializer
from users.models import User

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from django.contrib.auth.hashers import check_password

import jwt
import datetime

# Create your views here.

class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class ListUsersView(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class TokenCreateView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            user = User.objects.get(username=request.data.get("username"))
            print(100 * "=")
            print(user)
            if check_password(request.data.get("password"), user.password):
                payload = {
                    "user_id": str(user.id),
                    "username": user.username,
                    "exp": datetime.datetime.utcnow()
                    + datetime.timedelta(days=1),
                }

                token = jwt.encode(payload, "secret_key", algorithm="HS256")

                return Response({"token": token})

            return Response({"Detail": "Invalid credentials"}, status=400)
        except User.DoesNotExist:
            return Response({"Detail": "Invalid credentials"}, status=400)

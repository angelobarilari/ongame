from rest_framework import serializers
from .models import User, GenderChoices
from django.utils import timezone

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
    
#     id = serializers.UUIDField(read_only = True)
#     email = serializers.CharField()
#     password = serializers.CharField(write_only = True)
#     name = serializers.CharField()
#     surname = serializers.CharField()
#     gender = serializers.ChoiceField(
#         choices = GenderChoices.choices,
#         default = GenderChoices.PREFER_NOT_SAY
#     )
#     birthdate = serializers.DateField()
#     created_at = serializers.DateTimeField(default=timezone.now())

# class LoginSerializer(serializers.Serializer):
#     username = serializers.CharField(write_only = True)
#     password = serializers.CharField(write_only = True)
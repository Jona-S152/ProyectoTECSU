from rest_framework import serializers
from .models import Users

class logInSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

'''class LoginSerializer(serializers.Serializer):
    userName = serializers.CharField()
    password = serializers.CharField(write_only = True)'''
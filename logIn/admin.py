from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Users
from django.contrib.auth.hashers import make_password

# Register your models here.
admin.site.register(Users)
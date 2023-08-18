from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.http import JsonResponse
from django.contrib.auth import authenticate
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializer import logInSerializer
from .models import Users
from logIn.models import Users

# Create your views here.

class LogInView(viewsets.ModelViewSet):
    serializer_class = logInSerializer
    queryset = Users.objects.all()

#Manejo de la solicitud POST (VALIDACIÓN DE USUARO)
@csrf_exempt
@require_POST
def login_view(request):
    if request.method == 'POST':
        user_name = request.POST.get('userName')
        password = request.POST.get('password')

        # Buscar el usuario en la base de datos
        user = authenticate(request, userName = user_name, password = password)
        '''print(user_name)
        print(password)
        print(type(user))'''

        # Verificar la contraseña (debes aplicar tus propias técnicas de hashing y salting aquí)
        if user is not None:
            return JsonResponse({'message': 'Autenticación exitosa'})
        else:
            return JsonResponse({'message': 'Credenciales inválidas'}, status=400)

    return JsonResponse({'message': 'Solicitud inválida'}, status=400)

from rest_framework import viewsets
from .serializer import logInSerializer
from .models import Users

# Create your views here.

class LogInView(viewsets.ModelViewSet):
    serializer_class = logInSerializer
    queryset = Users.objects.all()
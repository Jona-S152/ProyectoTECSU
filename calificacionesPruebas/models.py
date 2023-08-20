from django.db import models
from django.conf import settings

class Prueba(models.Model):
    nombrePrueba = models.CharField(max_length=20)

class Calificacion(models.Model):
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    prueba = models.ForeignKey(Prueba, on_delete=models.CASCADE)
    calificacion = models.DecimalField(max_digits=5, decimal_places=2)

from django.urls import path
from .views import guardar_calificacion

urlpatterns = [
    path('guardar_calificacion/', guardar_calificacion, name='guardar_calificacion'),
]

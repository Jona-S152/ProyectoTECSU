from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Calificacion
from rankingApp.views import actualizar_total_calificaciones

def guardar_calificacion(request):
    if request.method == 'POST':
        usuario_id = request.POST.get('usuario_id')
        prueba_numero = request.POST.get('prueba_numero')
        calificacion = request.POST.get('calificacion')

        usuario = get_object_or_404(Users, id=usuario_id)

        calificacion_obj = Calificacion.objects.create(
            usuario=usuario,
            prueba_numero=prueba_numero,
            calificacion=calificacion
        )

        actualizar_total_calificaciones(usuario) # Llama a la función para actualizar los totales

        return JsonResponse({'message': 'Calificación guardada exitosamente.'})

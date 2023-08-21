from django.http import JsonResponse
from .models import TotalCalificaciones

def actualizar_total_calificaciones(usuario):
    calificaciones_usuario = Calificacion.objects.filter(usuario=usuario)
    total_calificaciones = sum(calificacion.calificacion for calificacion in calificaciones_usuario)
    
    total_calificacion_obj, created = TotalCalificaciones.objects.get_or_create(usuario=usuario)
    total_calificacion_obj.total = total_calificaciones
    total_calificacion_obj.save()


def obtener_ranking(request):
    ranking_data = TotalCalificaciones.objects.select_related('usuario').order_by('-total')
    
    ranking_list = [{'usuario': item.usuario.username, 'total': item.total} for item in ranking_data]
    
    return JsonResponse(ranking_list, safe=False)

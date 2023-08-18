from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from logIn import views
from .views import login_view



router = routers.DefaultRouter()
router.register(r'logIn', views.LogInView, 'logIn')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="LogIn API")),
    #path('login/', views.login_view, name = 'login_view')
    path('api/v1/login/', login_view, name = 'login')
]
from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.main),
    path('get_member/', views.get_member),
    path('get_team/', views.get_team),
    path('get_tft/', views.get_tft),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
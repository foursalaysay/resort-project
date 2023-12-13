from django.contrib import admin
from django.urls import path

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('resort_app.urls')),
    path('admin/', admin.site.urls),    
]

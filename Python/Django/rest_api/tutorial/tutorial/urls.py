from django.conf.urls import url, include
from rest_framework import routers
from tutorial.quickstart import views

routers = routers.DefaultRouter()
routers.register(r'users',views.UserViewSet)
routers.register(r'groups',views.GroupViewSet)

urlpatterns = [
    url(r'^',include(routers.urls)),
    url(r'^api-auth/',include('rest_framework.urls', namespace='rest_framework'))
]
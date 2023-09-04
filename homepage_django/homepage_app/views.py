from django.shortcuts import render
from django.http import HttpResponse
from .models import Member
from .models import Team
from .models import TFT, TFTImage
from .models import News
from .models import Publications
from .serializers import TFTSerializer, TFTImageSerializer
from django.core import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json
import csv
import os
from collections import defaultdict
from django.http import JsonResponse
from PIL import Image
from django.db.models import Count


def main(request):
    message = request.GET.get('abc')
    print(message)

    return HttpResponse(message)

def get_members(request):
    if request.method == 'GET':
        members = Member.objects.all()
        response_data = {'members': list(members.values())}
        return HttpResponse(json.dumps(response_data), content_type='application/json')

def get_member(request, name):
    if request.method == 'GET':
        try:
            members = Member.objects.filter(name=name)
            member_data = list(members.values('mem_key', 'name', 'email', 'profile','mem_image'))
            return JsonResponse({'members': member_data})
        except Member.DoesNotExist:
            return HttpResponse(status=404)        

def get_team(request):
    team = Team.objects.all().values()
    response_data = {'team': list(team)}
    return HttpResponse(json.dumps(response_data), content_type='application/json')

def get_news(request):
    news = News.objects.all().values()
    response_data = {'news': list(news)}
    return HttpResponse(json.dumps(response_data), content_type='application/json')

@api_view(['GET'])
def get_tft(request):
    tfts = TFT.objects.all()
    tft_serializer = TFTSerializer(tfts, many=True)

    tftimages = TFTImage.objects.all()
    tftimage_serializer = TFTImageSerializer(tftimages, many=True)

    response_data = []
    for tft in tft_serializer.data:
        tft_data = {
            'tft_key': tft['tft_key'],
            'tft_name': tft['tft_name'],
            'tft_explation': tft['tft_explation'],
            'tft_images': []
        }
        for tftimage in tftimage_serializer.data:
            if tftimage['TFT_ForeignKey'] == tft['tft_key']:
                image_url = tftimage['tft_image'].replace('/media/', '')
                tft_data['tft_images'].append(image_url)
        response_data.append(tft_data)

    return Response({'tft': response_data})

def get_publications(request):
    publications = Publications.objects.all().values(
        'pub_key', 'pub_year', 'pub_name', 'author_name', 'conference_name', 'm_id_id'
    )
    
    response_data = {'publications': list(publications)}
    return JsonResponse(response_data, safe=False)

def get_client_ip(request):
    client_ip = request.META.get('REMOTE_ADDR', None)
    port = 8000
    if client_ip:
        data = {'client_ip': client_ip, 'port': port}
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Unable to determine client IP'})
    



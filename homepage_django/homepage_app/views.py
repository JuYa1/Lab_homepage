from django.shortcuts import render
from django.http import HttpResponse
from .models import Member
from .models import Team
from .models import TFT, TFTImage
from .models import News
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


def main(request):
    message = request.GET.get('abc')
    print(message)

    return HttpResponse(message)

def get_members(request):
    if request.method == 'GET':
        members = Member.objects.all()
        response_data = {'members': list(members.values())}
        return HttpResponse(json.dumps(response_data), content_type='application/json')


def get_member(request, mem_key):
    if request.method == 'GET':
        member = Member.objects.get(mem_key=mem_key)
        response_data = serializers.serialize('json', [member])
        return HttpResponse(response_data, content_type='application/json')

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

    response_data = {
        'tft': tft_serializer.data,
        'tftimage': tftimage_serializer.data,
    }

    return Response(response_data)

def read_csv_data(file_path):
    data = defaultdict(lambda: defaultdict(list))
    with open(file_path, mode='r') as csv_file:
        reader = csv.DictReader(csv_file)
        for row in reader:
            name = row['name']
            year = row['pub_year']
            data[name][year].append(row)

    sorted_data = {}
    for name, years in data.items():
        sorted_data[name] = dict(sorted(years.items(), reverse=True))

    return sorted_data

def send_csv(request):
    file_path = os.path.join(os.path.dirname(__file__), 'crawlingcsv/scholar.csv')
    sorted_data = read_csv_data(file_path)

    # Group the data by year
    data_by_year = defaultdict(list)
    for name, years in sorted_data.items():
        for year, publications in years.items():
            year = int(year)
            for publication in publications:
                data_by_year[year].append(publication)

    # Convert the data_by_year dictionary to a list of dictionaries
    data_list = []
    for year, publications in data_by_year.items():
        data_list.append({"year": year, "publications": publications})

    return JsonResponse(data_list, safe=False)


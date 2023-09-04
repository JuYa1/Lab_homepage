import requests
from bs4 import BeautifulSoup

import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'homepage_django.settings')
django.setup()

from homepage_app.models import Member, Publications

def google_scholar():
    members = Member.objects.all()
    pagesize = 100
    headers = {'User-Agent': 'Googlebot'}

    for member in members:
        g_scholar_id = member.g_scholar_id
        
        if not g_scholar_id:
            continue
        
        results = []
        for page in range(0, 300, pagesize):
            url = f'https://scholar.google.com/citations?user={g_scholar_id}&hl=ko&oi=ao&cstart={page}&pagesize={pagesize}'
            response = requests.get(url, headers=headers)
            soup = BeautifulSoup(response.text, 'html.parser')
            user_results = soup.select('tr.gsc_a_tr')
            results.extend(user_results)
        
        # Remove existing publications for the current member
        member.publications.all().delete()

        for result in results:
            title_element = result.select_one('.gsc_a_t a')
            title = title_element.text if title_element else ""

            authors_element = result.select_one('.gs_gray')
            authors = authors_element.text if authors_element else ""

            conference_element = result.select_one('.gs_gray + .gs_gray')
            conference = conference_element.text if conference_element else ""

            year_element = result.select_one('.gsc_a_y span')
            year = year_element.text.strip(', ') if year_element else None

            try:
                year = int(year) if year else None
            except (ValueError, TypeError):
                year = None
            
            # Check if both title and authors are present before saving
            if title and authors:
                publication = Publications.objects.create(
                    pub_name=title,
                    author_name=authors,
                    pub_year=year,
                    conference_name=conference,
                    m_id=member
                )
            
    else:
        print(f"No data found for member: {member}")

if __name__ == "__main__":
    google_scholar()

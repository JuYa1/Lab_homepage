# from django.test import TestCase

# # Create your tests here.

from homepage_app.models import Member,Publications
import requests
from bs4 import BeautifulSoup

def google_scholar():
    # 모든 멤버 정보를 가져옵니다.
    members = Member.objects.all()

    pagesize = 100  # 페이지당 결과 수
    headers = {'User-Agent': 'Googlebot'}

    for member in members:
        g_scholar_id = member.g_scholar_id
        
        if not g_scholar_id:
            continue
        
        results = []  # 모든 결과를 저장할 리스트

        # 첫 페이지부터 마지막 페이지까지 순회
        for page in range(0, 300, pagesize):
            url = f'https://scholar.google.com/citations?user={g_scholar_id}&hl=ko&oi=ao&cstart={page}&pagesize={pagesize}'
            response = requests.get(url, headers=headers)
            soup = BeautifulSoup(response.text, 'html.parser')
            user_results = soup.select('td.gsc_a_t')
            results.extend(user_results)

        # 결과를 파싱하여 Publications 객체 생성 및 데이터베이스 저장
        if results:
            for result in results:
                result_text = result.text
                
                # 결과 문자열을 파싱하여 필요한 정보 추출
                parts = result_text.split(' ')
                pub_name = ' '.join(parts[:-4])  # 논문명 추출
                authors = ' '.join(parts[-4:-2])  # 저자 추출
                pub_year = parts[-2]  # 출판 년도 추출
                conference_name = ' '.join(parts[-1].split(',')[0:-2])  # 학회명 추출
                
                # Publications 객체 생성 및 데이터베이스 저장
                publication, created = Publications.objects.get_or_create(
                    pub_name=pub_name,
                    author_name=authors,
                    pub_year=pub_year,
                    conference_name=conference_name,
                    m_id=member
                )
                # 만약 이미 존재하는 논문이면, 필요한 경우 기존 데이터를 업데이트할 수도 있습니다.

        else:
            print(f"No data found for member: {member}")

if __name__ == "__main__":
    google_scholar()


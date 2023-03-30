from scholarly import scholarly, ProxyGenerator
import csv

pg = ProxyGenerator()
success = pg.FreeProxies()
scholarly.use_proxy(pg)

author_id = 'JVk6_AkAAAAJ'
data = scholarly.fill(scholarly.search_author_id(author_id), sections=['publications'])

# Write data to CSV file
with open('./crawlingcsv/scholar.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['name','title', 'pub_year', 'citation'])
    for pub in data['publications']:
        writer.writerow([data['name'],pub['bib']['title'], pub['bib']['pub_year'], pub['bib']['citation']])

# member, created = Member.objects.get_or_create(
#     # mem_key=data['scholar_id'],
#     defaults={'name': data['name']},
# )

# for pub in data['publications']:
#     publication, created = Publications.objects.get_or_create(
#         pub_year=int(pub['bib']['pub_year']),
#         pub_name=pub['bib']['title'],
#         author_name=data['name'],
#         conference_name=pub['bib']['citation'],
#     )
#     member_publication, created = Member_Publications.objects.get_or_create(
#     m_id=member,
#     p_id=publication,
# )
# author = scholarly.search_author_id('JVk6_AkAAAAJ')
# data = scholarly.fill(author, sections=['basics','publications'])
# for pub in data['publications']:
#     print([data['name'],pub['bib']['title'], pub['bib']['pub_year'], pub['bib']['citation']])


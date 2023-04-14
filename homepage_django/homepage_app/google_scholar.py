# from scholarly import scholarly, ProxyGenerator
# import csv

# pg = ProxyGenerator()
# success = pg.FreeProxies()
# scholarly.use_proxy(pg)

# author_id = 'JVk6_AkAAAAJ'
# data = scholarly.fill(scholarly.search_author_id(author_id), sections=['publications'])

# # Write data to CSV file
# with open('./crawlingcsv/scholar.csv', 'w', newline='', encoding='utf-8') as f:
#     writer = csv.writer(f)
#     writer.writerow(['name','title', 'pub_year', 'citation'])
#     for pub in data['publications']:
#         writer.writerow([data['name'],pub['bib']['title'], pub['bib']['pub_year'], pub['bib']['citation']])

from scholarly import scholarly, ProxyGenerator
import csv
import time

pg = ProxyGenerator()
success = pg.FreeProxies()
scholarly.use_proxy(pg)

author_id = 'JVk6_AkAAAAJ'
data = scholarly.fill(scholarly.search_author_id(author_id), sections=['publications'])

# Load existing data from CSV file
existing_titles = set()
with open('./crawlingcsv/scholar.csv', 'r', newline='', encoding='utf-8') as f:
    reader = csv.reader(f)
    next(reader)  # Skip header row
    for row in reader:
        title = row[1]
        existing_titles.add(title)

# Write data to CSV file
with open('./crawlingcsv/scholar.csv', 'a', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    for pub in data['publications']:
        title = pub['bib']['title']
        if title not in existing_titles:
            coauthors = ', '.join([author['name'] for author in pub.get('authors', [])])
            writer.writerow([data['name'], title, pub['bib']['pub_year'], pub['bib']['citation'], coauthors])
            
            # Search for publication using title
            search_query = title
            results = scholarly.search_pubs(search_query)
            for result in results:
                result = scholarly.fill(result)
                print(f"Title: {result['bib']['title']}")
                coauthors = ', '.join([author['name'] for author in result.get('authors', [])])
                print(f"Coauthors: {coauthors}")
                print()
            
            # Delay between requests
            time.sleep(5)
from bs4 import BeautifulSoup
import requests

site = requests.get('https://www.climatempo.com.br/').content

soup = BeautifulSoup(site, 'html.parser')

print(soup.prettify()) #to show all html content

#you need to use the underscore in class to make your code run
temperature = soup.find("span", class_="_block _margin-b-5 -gray")


print(soup.find('admin'))
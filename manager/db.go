package manager

import (
	"movie/getter"
	"strings"
)

// 增加采集源
func (here *Manager) AddSource(name string, url string) {
	result, source := here.Db.AddSource(name, url)
	if !result {
		return
	}
	alias := source.Get("alias").(string)
	here.Getters[alias] = getter.NewGetter(name, url, alias, 1)
}

type Movie struct {
	Name        string `json:"name"`
	Pic         string `json:"pic"`
	Actor       string `json:"actor"`
	Director    string `json:"director"`
	Duration    string `json:"duration"`
	Description string `json:"description"`
	Url         string `json:"url"`
}

func (here *Manager) Search(keyWords string) []Movie {
	var movies []Movie
	names := strings.Fields(keyWords)
	docs := here.Db.SearchContent(names)
	for _, doc := range docs {
		movies = append(movies, Movie{
			Name:        doc.Get("name").(string),
			Pic:         doc.Get("pic").(string),
			Actor:       doc.Get("actor").(string),
			Director:    doc.Get("director").(string),
			Duration:    doc.Get("duration").(string),
			Description: doc.Get("description").(string),
			Url:         doc.Get("url").(string),
		})
	}
	return movies
}

// 删除采集源
func (here *Manager) DelSource(url string) error {
	return here.Db.DelSource(url)
}

// 更新采集源名字
func (here *Manager) UpdateSourceName(oldName string, newName string) error {
	return here.Db.UpdateSourceName(oldName, newName)
}

// 删除采集记录
func (here *Manager) DelContent(id string, belong string) error {
	return here.Db.DelContent(id, belong)
}

// 增加自定义分类
func (here *Manager) AddCategory(name string) bool {
	return here.Db.AddCategory(name)
}

// 获取所有分类
func (here *Manager) GetCategory() []string {
	var categorys []string
	docs := here.Db.GetCategory()
	for _, v := range docs {
		category := v.Get("name").(string)
		categorys = append(categorys, category)
	}
	return categorys
}

// 删除分类
func (here *Manager) DelCategory(name string) error {
	return here.Db.DelCategory(name)
}

// 更新分类
func (here *Manager) UpdateCategory(oldName string, newName string) error {
	return here.Db.UpdateCategory(oldName, newName)
}

// 分配采集类
func (here *Manager) AllocateClass(id int, belong string, belong_cat string) error {
	return here.Db.AllocateClass(id, belong, belong_cat)
}
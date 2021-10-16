export default {
    state: {
        lan: 'en',
        version_component: {
            author: {
                en: 'Fadeev Artem',
                ru: 'Фадеев Артём'
            },
            point: {
                en: 'Moscow Russia',
                ru: 'Москва Россия'
            },
        },
        user_items: {
            list_users: {
                en: 'List of users',
                ru: 'Список пользователей'
            },
        },
        user_item: {
            superuser: {
                en: 'superuser',
                ru: 'суперпользователь'
            },
            delete: {
                en: 'delete',
                ru: 'удалить'
            },
        },
        user_menu: {
            admin_panel: {
                en: 'Admin panel',
                ru: 'Панель управления'
            },
            users: {
                en: 'Users',
                ru: 'Пользователи'
            },
            create_category: {
                en: 'Create category',
                ru: 'Создать категорию'
            },
            create_link: {
                en: "Create link",
                ru: 'Создать линку'
            },
            login: {
                en: 'Log in',
                ru: 'Авторизация'
            },
            signup: {
                en: 'Sign up',
                ru: 'Регистрация'
            },
            logout: {
                en: 'Log out',
                ru: 'Выйти'
            }
        },
        auth_links: {
            message_no_category: {
                en: "You have no categories. Press 'Create category' for create it",
                ru: "У вас нет ни одной категории. Для создания категории нажмите 'Создать категорию'"
            }
        },
        un_auth_links_component: {
            links: {
                en: 'Links',
                ru: 'Ссылки'
            }
        },
        create_category: {
            create_category_title: {
                en: 'Create category',
                ru: 'Создание новой категории'
            },
            category_title: {
                en: 'Category title',
                ru: 'Название категории'
            },
            helper_text_category_title: {
                en: 'Title is required',
                ru: 'Необходимо ввести название'
            },
            btn_create: {
                en: 'Create',
                ru: 'Создать'
            }
        },
        create_category_link: {
            title: {
                en: 'Add link to',
                ru: 'Добавить лику в'
            },
            link_name: {
                en: 'Link name',
                ru: 'Название ссылки'
            },
            helper_text_link_name: {
                en: 'Insert link name',
                ru: 'Укажите название ссылки'
            },
            url_name: {
                en: 'URL',
                ru: 'URL'
            },
            helper_text_url_name: {
                en: 'Invalid URL',
                ru: 'Некорректный URL'
            },
            icon: {
                en: 'Icon',
                ru: 'Иконка'
            },
            btn_create: {
                en: 'Create',
                ru: 'Создать'
            }

        },
        create_link: {
            title: {
                en: 'Create link',
                ru: 'Создание новой ссылки'
            },
            category: {
                en: 'Category',
                ru: 'Категория'
            },
            helper_text_category: {
                en: 'Select or create category',
                ru: 'Укажите категорию'
            },
            link: {
                en: 'Link name',
                ru: 'Название ссылки'
            },
            helper_text_link: {
                en: 'Insert link name',
                ru: 'Укажите название ссылки'
            },
            url: {
                en: 'URL',
                ru: 'URL ссылки'
            },
            helper_text_url: {
                en: 'Insert URL',
                ru: 'Укажите правильный URL'
            },
            icon: {
                en: 'Icon',
                ru: 'Иконка'
            },
            btn_create: {
                en: 'Create',
                ru: 'Создать'
            }
        },
        edit_category: {
            btn_edit: {
                en: 'Edit',
                ru: 'Изменить'
            },
            btn_delete_link: {
                en: 'Delete',
                ru: 'Удалить'
            },
            btn_add_link: {
                en: 'Add link',
                ru: 'Новая линка'
            },
            btn_rename: {
                en: 'Rename',
                ru: 'Переименовать'
            },
            btn_delete_category: {
                en: 'Delete Category',
                ru: 'Удалить Категорию'
            }
        },
        edit_link: {
            title: {
                en: 'Edit link',
                ru: 'Редактирование ссылки'
            },
            category: {
                en: 'Category',
                ru: 'Категория'
            },
            helper_text_category: {
                en: 'Select or create category',
                ru: 'Укажите категорию'
            },
            link: {
                en: 'Link name',
                ru: 'Название ссылки'
            },
            helper_text_link: {
                en: 'Insert link name',
                ru: 'Укажите название ссылки'
            },
            url: {
                en: 'URL',
                ru: 'URL ссылки'
            },
            helper_text_url: {
                en: 'Insert URL',
                ru: 'Укажите правильный URL'
            },
            icon: {
                en: 'Icon',
                ru: 'Иконка'
            },
            btn_change: {
                en: 'Change',
                ru: 'Изменить'
            }
        },
    },
    getters: {
        get_version_component: state => state.version_component,
        get_lang_user_items: state => state.user_items,
        get_lang_user_item: state => state.user_item,
        get_lang_user_menu: state => state.user_menu,
        get_lang_auth_links: state => state.auth_links,
        get_lang_un_auth_links: state => state.un_auth_links_component,
        get_lang_create_category: state => state.create_category,
        get_lang_create_category_link: state => state.create_category_link,
        get_lang_create_link: state => state.create_link,
        get_lang_edit_category: state => state.edit_category,
        get_lang_edit_link: state => state.edit_link,
    }
}
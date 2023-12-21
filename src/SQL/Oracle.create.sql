



CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодСотрудника" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ДатаРождения" DATE NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Гости"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодГостя" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"Скидка" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Скидка"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Процент" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Стол"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерСтола" NUMBER(10) NULL,

	"КолвоМест" NUMBER(10) NULL,

	"Статус" NVARCHAR2(13) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДолжности" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Бронь"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодБрони" NUMBER(10) NULL,

	"Комментарий" NVARCHAR2(255) NULL,

	"Скидка" NUMBER(1) NULL,

	"Ресторан" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"Стол" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Ресторан"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодРест" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Запись"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаЗаписи" DATE NULL,

	"Время" NVARCHAR2(255) NULL,

	"Гости" RAW(16) NOT NULL,

	"Бронь" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_1441" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6987" on "Сотрудники" ("Должность");

ALTER TABLE "Гости"
	ADD CONSTRAINT "Гости_FСкидка_0" FOREIGN KEY ("Скидка") REFERENCES "Скидка" ("primaryKey");

CREATE INDEX "Гости_IСкидка" on "Гости" ("Скидка");

ALTER TABLE "Бронь"
	ADD CONSTRAINT "Бронь_FРесторан_0" FOREIGN KEY ("Ресторан") REFERENCES "Ресторан" ("primaryKey");

CREATE INDEX "Бронь_IРесторан" on "Бронь" ("Ресторан");

ALTER TABLE "Бронь"
	ADD CONSTRAINT "Бронь_FСотруд_4059" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "Бронь_IСотруд_5411" on "Бронь" ("Сотрудники");

ALTER TABLE "Бронь"
	ADD CONSTRAINT "Бронь_FСтол_0" FOREIGN KEY ("Стол") REFERENCES "Стол" ("primaryKey");

CREATE INDEX "Бронь_IСтол" on "Бронь" ("Стол");

ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FГости_0" FOREIGN KEY ("Гости") REFERENCES "Гости" ("primaryKey");

CREATE INDEX "Запись_IГости" on "Запись" ("Гости");

ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FБронь_0" FOREIGN KEY ("Бронь") REFERENCES "Бронь" ("primaryKey");

CREATE INDEX "Запись_IБронь" on "Запись" ("Бронь");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");



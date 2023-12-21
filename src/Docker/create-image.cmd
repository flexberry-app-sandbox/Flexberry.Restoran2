docker build --no-cache -f SQL\Dockerfile.PostgreSql -t restoran2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t restoran2/app ../..

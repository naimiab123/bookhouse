package nai.ca.bstr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import nai.ca.bstr.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}

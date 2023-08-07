package io.github.brauliosassi.agendaapi.model.repository;

import io.github.brauliosassi.agendaapi.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato, Integer> {
}

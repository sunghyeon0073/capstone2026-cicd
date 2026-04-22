package com.example.capstone2026.service;

import com.example.capstone2026.entity.Member;
import com.example.capstone2026.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    // 회원가입
    public Member register(String userId, String password, String name) {
        Member member = Member.builder()
                .userId(userId)
                .password(password)
                .name(name)
                .build();
        return memberRepository.save(member);
    }

    // 로그인
    public Member login(String userId, String password) {
        Member member = memberRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("존재하지 않는 아이디입니다."));

        if (!member.getPassword().equals(password)) {
            throw new RuntimeException("비밀번호가 일치하지 않습니다.");
        }
        return member;
    }
}